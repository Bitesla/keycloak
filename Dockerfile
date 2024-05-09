FROM quay.io/keycloak/keycloak:24.0.3 as builder
WORKDIR /opt/keycloak

COPY keycloakify-starter/dist_keycloak/target/keycloakify-starter-keycloak-theme-6.1.9.jar /opt/keycloak/providers/
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:24.0.3
COPY --from=builder /opt/keycloak/ /opt/keycloak/
ENV KC_HOSTNAME=localhost
ENTRYPOINT ["/opt/keycloak/bin/kc.sh", "start-dev"]