#version 330 core

in vec3 vert;
in vec3 norml;
out vec4 fragColor;

uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

uniform vec4 lightAmbient;
uniform vec4 lightDiffuse;
uniform vec4 lightSpecular;
uniform vec4 lightPosition;

uniform vec4 matAmbient;
uniform vec4 matDiffuse;
uniform vec4 matSpecular;
uniform float matShininess;

void main()
{
    vec3 N = normalize(normalMatrix * norml);
    vec4 P = modelViewMatrix * vec4(vert,1.0);
    vec3 L = normalize(lightPosition-P).xyz;
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 H = normalize(V+L);
    vec4 amb = matAmbient * lightAmbient;
    vec4 dif = matDiffuse * lightDiffuse * max(0,dot(N,L));
    vec4 spec = matSpecular * lightSpecular * pow(max(0,dot(N,H)),matShininess);
    fragColor = amb + dif + spec;
}
