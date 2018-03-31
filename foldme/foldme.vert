#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;
uniform float time;

void main()
{
    float fi = -time * texCoord.s;
    mat3 rotMat = mat3(vec3(cos(fi),0,-sin(fi)),
			vec3(0,1,0),
			vec3(sin(fi),0,cos(fi)));
    vec3 vert = rotMat * vertex; 
    frontColor = vec4(0,0,1,0);
    gl_Position = modelViewProjectionMatrix * vec4(vert, 1.0);
}
