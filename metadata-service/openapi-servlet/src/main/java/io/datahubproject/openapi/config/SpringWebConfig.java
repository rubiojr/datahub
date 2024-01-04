package io.datahubproject.openapi.config;

import com.linkedin.metadata.models.registry.EntityRegistry;
import io.datahubproject.openapi.converter.StringToChangeCategoryConverter;
import io.datahubproject.openapi.v3.OpenAPIV3Generator;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.models.OpenAPI;
import java.util.Collections;
import java.util.List;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.http.converter.FormHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.StringHttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@EnableWebMvc
@OpenAPIDefinition(
    info = @Info(title = "DataHub OpenAPI", version = "2.0.0"),
    servers = {@Server(url = "/openapi/", description = "Default Server URL")})
@Configuration
public class SpringWebConfig implements WebMvcConfigurer {

  @Override
  public void configureMessageConverters(List<HttpMessageConverter<?>> messageConverters) {
    messageConverters.add(new StringHttpMessageConverter());
    messageConverters.add(new ByteArrayHttpMessageConverter());
    messageConverters.add(new FormHttpMessageConverter());
    messageConverters.add(new MappingJackson2HttpMessageConverter());
  }

  @Override
  public void addFormatters(FormatterRegistry registry) {
    registry.addConverter(new StringToChangeCategoryConverter());
  }

  @Bean
  public GroupedOpenApi defaultOpenApiGroup() {
    return GroupedOpenApi.builder()
        .group("default")
        .packagesToExclude(
            "io.datahubproject.openapi.operations",
            "io.datahubproject.openapi.health",
            "io.datahubproject.openapi.v3")
        .build();
  }

  @Bean
  public GroupedOpenApi operationsOpenApiGroup() {
    return GroupedOpenApi.builder()
        .group("operations")
        .packagesToScan("io.datahubproject.openapi.operations", "io.datahubproject.openapi.health")
        .build();
  }

  @Bean
  public GroupedOpenApi v3OpenApiGroup(final EntityRegistry entityRegistry) {
    return GroupedOpenApi.builder()
        .group("v3")
        .addOpenApiCustomiser(
            openApi -> {
              OpenAPI v3OpenApi = OpenAPIV3Generator.generateOpenApiSpec(entityRegistry);
              openApi.setInfo(v3OpenApi.getInfo());
              openApi.setTags(Collections.emptyList());
              openApi.setPaths(v3OpenApi.getPaths());
              openApi.setComponents(v3OpenApi.getComponents());
            })
        .build();
  }
}
