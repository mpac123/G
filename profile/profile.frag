#version 330 core

in vec4 frontColor;
in vec3 N;
in vec3 V;
out vec4 fragColor;

uniform mat3 normalMatrix;
uniform float epsilon = 0.2;
uniform float light = 0.5;

void main()
{
    vec3 yellow = vec3(0.7,0.6,0.0);
    if (dot(N,normalize(-V))<epsilon)
	fragColor = vec4(yellow,1.0);
    else
        fragColor = frontColor * light * N.z;
}
