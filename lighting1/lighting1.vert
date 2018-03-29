#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
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
    vec3 N = normalize(normalMatrix * normal);
    vec4 P = modelViewMatrix * vec4(vertex,1.0);
    vec3 L = normalize(lightPosition-P).xyz;
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 H = normalize(V+L);
    vec4 amb = matAmbient * lightAmbient;
    vec4 dif = matDiffuse * lightDiffuse * max(0,dot(N,L));
    vec4 spec = matSpecular * lightSpecular * pow(max(0,dot(N,H)),matShininess);
    frontColor = amb + dif + spec;
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
