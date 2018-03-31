#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform mat4 projectionMatrix;

uniform float time;
uniform bool eyespace;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;
void main()
{
    vec3 N = normalize(normalMatrix * normal);
    frontColor = vec4(color,1);
    float r = 0.5*distance(boundingBoxMax,boundingBoxMin);
    float amplitude = (r/10)*vertex.y;
    if (eyespace) {
	amplitude = (r/10)*(modelViewMatrix*vec4(vertex,1)).y;
    }
    float d = amplitude * sin(time);
    gl_Position = modelViewProjectionMatrix * vec4(vertex+d*normal, 1.0);
    
}
