package com.linkedin.gms.factory.timeline.eventgenerator;

import static com.linkedin.metadata.Constants.*;

import com.datahub.authentication.Authentication;
import com.linkedin.entity.client.SystemRestliEntityClient;
import com.linkedin.metadata.timeline.eventgenerator.AssertionRunEventChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.DataProcessInstanceRunEventChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.DatasetPropertiesChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.DeprecationChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.EditableDatasetPropertiesChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.EditableSchemaMetadataChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.EntityChangeEventGeneratorRegistry;
import com.linkedin.metadata.timeline.eventgenerator.EntityKeyChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.GlobalTagsChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.GlossaryTermInfoChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.GlossaryTermsChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.InstitutionalMemoryChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.OwnershipChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.SchemaMetadataChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.SingleDomainChangeEventGenerator;
import com.linkedin.metadata.timeline.eventgenerator.StatusChangeEventGenerator;
import javax.annotation.Nonnull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.DependsOn;

@Configuration
public class EntityChangeEventGeneratorRegistryFactory {
  @Autowired ApplicationContext applicationContext;

  @Bean(name = "entityChangeEventGeneratorRegistry")
  @DependsOn({"restliEntityClient", "systemAuthentication"})
  @Nonnull
  protected EntityChangeEventGeneratorRegistry entityChangeEventGeneratorRegistry() {
    final SystemRestliEntityClient entityClient =
        applicationContext.getBean(SystemRestliEntityClient.class);
    final Authentication systemAuthentication = applicationContext.getBean(Authentication.class);
    final EntityChangeEventGeneratorRegistry registry = new EntityChangeEventGeneratorRegistry();
    registry.register(SCHEMA_METADATA_ASPECT_NAME, new SchemaMetadataChangeEventGenerator());
    registry.register(
        EDITABLE_SCHEMA_METADATA_ASPECT_NAME, new EditableSchemaMetadataChangeEventGenerator());
    registry.register(GLOBAL_TAGS_ASPECT_NAME, new GlobalTagsChangeEventGenerator());
    registry.register(GLOSSARY_TERMS_ASPECT_NAME, new GlossaryTermsChangeEventGenerator());
    registry.register(OWNERSHIP_ASPECT_NAME, new OwnershipChangeEventGenerator());
    registry.register(
        INSTITUTIONAL_MEMORY_ASPECT_NAME, new InstitutionalMemoryChangeEventGenerator());
    registry.register(DATASET_PROPERTIES_ASPECT_NAME, new DatasetPropertiesChangeEventGenerator());
    registry.register(GLOSSARY_TERM_INFO_ASPECT_NAME, new GlossaryTermInfoChangeEventGenerator());
    registry.register(DOMAINS_ASPECT_NAME, new SingleDomainChangeEventGenerator());
    registry.register(DATASET_PROPERTIES_ASPECT_NAME, new DatasetPropertiesChangeEventGenerator());
    registry.register(
        EDITABLE_DATASET_PROPERTIES_ASPECT_NAME,
        new EditableDatasetPropertiesChangeEventGenerator());

    // Entity Lifecycle Differs
    registry.register(DATASET_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(CONTAINER_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(CHART_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(DASHBOARD_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(DATA_FLOW_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(DATA_JOB_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(DOMAIN_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(TAG_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(GLOSSARY_TERM_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(CORP_GROUP_KEY_ASPECT_NAME, new EntityKeyChangeEventGenerator<>());
    registry.register(STATUS_ASPECT_NAME, new StatusChangeEventGenerator());
    registry.register(DEPRECATION_ASPECT_NAME, new DeprecationChangeEventGenerator());

    // Assertion differs
    registry.register(ASSERTION_RUN_EVENT_ASPECT_NAME, new AssertionRunEventChangeEventGenerator());

    // Data Process Instance differs
    registry.register(
        DATA_PROCESS_INSTANCE_RUN_EVENT_ASPECT_NAME,
        new DataProcessInstanceRunEventChangeEventGenerator(entityClient));

    // TODO: Add ML models.

    return registry;
  }
}
