package com.linkedin.metadata.aspect.plugins;

import static org.testng.Assert.assertEquals;
import static org.testng.Assert.assertNotNull;

import com.datahub.test.TestEntityProfile;
import com.linkedin.data.schema.annotation.PathSpecBasedSchemaAnnotationVisitor;
import com.linkedin.events.metadata.ChangeType;
import com.linkedin.metadata.models.EntitySpec;
import com.linkedin.metadata.models.EventSpec;
import com.linkedin.metadata.models.registry.ConfigEntityRegistry;
import com.linkedin.metadata.models.registry.EntityRegistryException;
import com.linkedin.metadata.models.registry.MergedEntityRegistry;
import java.io.FileNotFoundException;
import java.util.Map;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class PluginsTest {
  public static String REGISTRY_FILE_1 = "test-entity-registry-plugins-1.yml";
  public static String REGISTRY_FILE_2 = "test-entity-registry-plugins-2.yml";
  public static String REGISTRY_FILE_3 = "test-entity-registry-plugins-3.yml";

  @BeforeTest
  public void disableAssert() {
    PathSpecBasedSchemaAnnotationVisitor.class
        .getClassLoader()
        .setClassAssertionStatus(PathSpecBasedSchemaAnnotationVisitor.class.getName(), false);
  }

  @Test
  public void testConfigEntityRegistry() throws FileNotFoundException {
    ConfigEntityRegistry configEntityRegistry =
        new ConfigEntityRegistry(
            TestEntityProfile.class.getClassLoader().getResourceAsStream(REGISTRY_FILE_1));

    Map<String, EntitySpec> entitySpecs = configEntityRegistry.getEntitySpecs();
    Map<String, EventSpec> eventSpecs = configEntityRegistry.getEventSpecs();
    assertEquals(entitySpecs.values().size(), 2);
    assertEquals(eventSpecs.values().size(), 1);

    EntitySpec entitySpec = configEntityRegistry.getEntitySpec("dataset");
    assertEquals(entitySpec.getName(), "dataset");
    assertEquals(entitySpec.getKeyAspectSpec().getName(), "datasetKey");
    assertEquals(entitySpec.getAspectSpecs().size(), 4);
    assertNotNull(entitySpec.getAspectSpec("datasetKey"));
    assertNotNull(entitySpec.getAspectSpec("datasetProperties"));
    assertNotNull(entitySpec.getAspectSpec("schemaMetadata"));
    assertNotNull(entitySpec.getAspectSpec("status"));

    entitySpec = configEntityRegistry.getEntitySpec("chart");
    assertEquals(entitySpec.getName(), "chart");
    assertEquals(entitySpec.getKeyAspectSpec().getName(), "chartKey");
    assertEquals(entitySpec.getAspectSpecs().size(), 3);
    assertNotNull(entitySpec.getAspectSpec("chartKey"));
    assertNotNull(entitySpec.getAspectSpec("chartInfo"));
    assertNotNull(entitySpec.getAspectSpec("status"));

    EventSpec eventSpec = configEntityRegistry.getEventSpec("testEvent");
    assertEquals(eventSpec.getName(), "testEvent");
    assertNotNull(eventSpec.getPegasusSchema());

    assertEquals(
        configEntityRegistry.getAspectPayloadValidators(ChangeType.UPSERT, "*", "status").size(),
        2);
    assertEquals(
        configEntityRegistry.getAspectPayloadValidators(ChangeType.DELETE, "*", "status").size(),
        0);

    assertEquals(
        configEntityRegistry.getMCLSideEffects(ChangeType.UPSERT, "chart", "chartInfo").size(), 1);
    assertEquals(
        configEntityRegistry.getMCLSideEffects(ChangeType.DELETE, "chart", "chartInfo").size(), 0);

    assertEquals(
        configEntityRegistry.getMCPSideEffects(ChangeType.UPSERT, "dataset", "datasetKey").size(),
        1);
    assertEquals(
        configEntityRegistry.getMCPSideEffects(ChangeType.DELETE, "dataset", "datasetKey").size(),
        0);

    assertEquals(
        configEntityRegistry.getMutationHooks(ChangeType.UPSERT, "*", "schemaMetadata").size(), 1);
    assertEquals(
        configEntityRegistry.getMutationHooks(ChangeType.DELETE, "*", "schemaMetadata").size(), 0);
  }

  @Test
  public void testMergedEntityRegistry() throws EntityRegistryException {
    ConfigEntityRegistry configEntityRegistry1 =
        new ConfigEntityRegistry(
            TestEntityProfile.class.getClassLoader().getResourceAsStream(REGISTRY_FILE_1));
    ConfigEntityRegistry configEntityRegistry2 =
        new ConfigEntityRegistry(
            TestEntityProfile.class.getClassLoader().getResourceAsStream(REGISTRY_FILE_2));

    MergedEntityRegistry mergedEntityRegistry = new MergedEntityRegistry(configEntityRegistry1);
    mergedEntityRegistry.apply(configEntityRegistry2);

    Map<String, EntitySpec> entitySpecs = mergedEntityRegistry.getEntitySpecs();
    Map<String, EventSpec> eventSpecs = mergedEntityRegistry.getEventSpecs();
    assertEquals(entitySpecs.values().size(), 2);
    assertEquals(eventSpecs.values().size(), 1);

    EntitySpec entitySpec = mergedEntityRegistry.getEntitySpec("dataset");
    assertEquals(entitySpec.getName(), "dataset");
    assertEquals(entitySpec.getKeyAspectSpec().getName(), "datasetKey");
    assertEquals(entitySpec.getAspectSpecs().size(), 4);
    assertNotNull(entitySpec.getAspectSpec("datasetKey"));
    assertNotNull(entitySpec.getAspectSpec("datasetProperties"));
    assertNotNull(entitySpec.getAspectSpec("schemaMetadata"));
    assertNotNull(entitySpec.getAspectSpec("status"));

    entitySpec = mergedEntityRegistry.getEntitySpec("chart");
    assertEquals(entitySpec.getName(), "chart");
    assertEquals(entitySpec.getKeyAspectSpec().getName(), "chartKey");
    assertEquals(entitySpec.getAspectSpecs().size(), 3);
    assertNotNull(entitySpec.getAspectSpec("chartKey"));
    assertNotNull(entitySpec.getAspectSpec("chartInfo"));
    assertNotNull(entitySpec.getAspectSpec("status"));

    EventSpec eventSpec = mergedEntityRegistry.getEventSpec("testEvent");
    assertEquals(eventSpec.getName(), "testEvent");
    assertNotNull(eventSpec.getPegasusSchema());

    assertEquals(
        mergedEntityRegistry.getAspectPayloadValidators(ChangeType.UPSERT, "*", "status").size(),
        3);
    assertEquals(
        mergedEntityRegistry.getAspectPayloadValidators(ChangeType.DELETE, "*", "status").size(),
        1);

    assertEquals(
        mergedEntityRegistry.getMCLSideEffects(ChangeType.UPSERT, "chart", "chartInfo").size(), 2);
    assertEquals(
        mergedEntityRegistry.getMCLSideEffects(ChangeType.DELETE, "chart", "chartInfo").size(), 1);

    assertEquals(
        mergedEntityRegistry.getMCPSideEffects(ChangeType.UPSERT, "dataset", "datasetKey").size(),
        2);
    assertEquals(
        mergedEntityRegistry.getMCPSideEffects(ChangeType.DELETE, "dataset", "datasetKey").size(),
        1);

    assertEquals(
        mergedEntityRegistry.getMutationHooks(ChangeType.UPSERT, "*", "schemaMetadata").size(), 2);
    assertEquals(
        mergedEntityRegistry.getMutationHooks(ChangeType.DELETE, "*", "schemaMetadata").size(), 1);
  }

  @Test
  public void tripleMergeWithDisabled() throws EntityRegistryException {
    ConfigEntityRegistry configEntityRegistry1 =
        new ConfigEntityRegistry(
            TestEntityProfile.class.getClassLoader().getResourceAsStream(REGISTRY_FILE_1));
    ConfigEntityRegistry configEntityRegistry2 =
        new ConfigEntityRegistry(
            TestEntityProfile.class.getClassLoader().getResourceAsStream(REGISTRY_FILE_2));
    ConfigEntityRegistry configEntityRegistry3 =
        new ConfigEntityRegistry(
            TestEntityProfile.class.getClassLoader().getResourceAsStream(REGISTRY_FILE_3));

    MergedEntityRegistry mergedEntityRegistry = new MergedEntityRegistry(configEntityRegistry1);
    mergedEntityRegistry.apply(configEntityRegistry2);

    assertEquals(
        mergedEntityRegistry.getAllAspectPayloadValidators().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        1);
    assertEquals(
        mergedEntityRegistry.getAllMutationHooks().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        1);
    assertEquals(
        mergedEntityRegistry.getAllMCLSideEffects().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        1);
    assertEquals(
        mergedEntityRegistry.getAllMCPSideEffects().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        1);

    // This one disables earlier plugins that are delete
    mergedEntityRegistry.apply(configEntityRegistry3);

    assertEquals(
        mergedEntityRegistry.getAllAspectPayloadValidators().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        0);
    assertEquals(
        mergedEntityRegistry.getAllMutationHooks().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        0);
    assertEquals(
        mergedEntityRegistry.getAllMCLSideEffects().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        0);
    assertEquals(
        mergedEntityRegistry.getAllMCPSideEffects().stream()
            .filter(p -> p.getConfig().getSupportedOperations().contains("DELETE"))
            .count(),
        0);
  }
}
