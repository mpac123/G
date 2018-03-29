#version 330 core

in vec3 vert;
in vec3 norml;
out vec4 fragColor;

uniform vec4 lightAmbient;
uniform vec4 lightDiffuse;
uniform vec4 lightSpecular;
uniform vec4 lightPosition;

uniform vec4 matAmbient;
uniform vec4 matDiffuse;
uniform vec4 matSpecular;
uniform float matShininess;

uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

void main()
{
    vec3 N = normalize(normalMatrix * norml);
    vec4 P = modelViewMatrix * vec4(vert,1.0);
    vec3 L = normalize(lightPosition-P).xyz;
    vec3 V = normalize(-P.xyz);
    vec3 R = normalize(2*max(0,dot(N,L))*N-L);
    vec4 amb = matAmbient * lightAmbient;
    vec4 dif = matDiffuse * lightDiffuse * max(0.0,dot(N,L));
    vec4 spec = matSpecular * lightSpecular * pow(max(0.0,dot(R,V)),matShininess);
    fragColor = amb + dif + spec;
}
