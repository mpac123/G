#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

void main()
{
    vec4 red = vec4(1,0,0,0);
    vec4 yellow = vec4(1,1,0,0);
    vec4 green = vec4(0,1,0,0);
    vec4 cian = vec4(0,1,1,1);
    vec4 blue = vec4(0,0,1,0);

    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
    float pos = 4*(gl_Position.y+gl_Position.w)/(2*gl_Position.w);
    if (pos<1) frontColor=mix(red,yellow,fract(pos));
    else if (pos<2) frontColor = mix(yellow,green,fract(pos));
    else if (pos<3) frontColor = mix(green,cian,fract(pos));
    else frontColor = mix(cian,blue,fract(pos));
}
