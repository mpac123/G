#version 330 core

in vec4 frontColor;
in vec3 norml;
out vec4 fragColor;

uniform mat3 normalMatrix;

void main()
{
    vec3 N = normalize(normalMatrix * norml);
    fragColor = frontColor*N.z;
}
