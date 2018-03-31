#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform mat4 modelViewProjectionMatrix;
uniform mat3 normalMatrix;

uniform vec3 boundingBoxMin;
uniform vec3 boundingBoxMax;

void main()
{
    float height = boundingBoxMax.y-boundingBoxMin.y;
    float pos = height-boundingBoxMax.y+vertex.y;
    vec4 blue = vec4(0,0,1,0);
    vec4 cian = vec4(0,1,1,0);
    vec4 green = vec4(0,1,0,0);
    vec4 yellow = vec4(1,1,0,0);
    vec4 red = vec4(1,0,0,0);

    if (pos/height<0.25) 
	frontColor=mix(red,yellow,pos/height*4);
    else if (pos/height<0.5) frontColor=mix(yellow,green,(pos/height-0.25)*4);
    else if (pos/height<0.75) frontColor=mix(green,cian,(pos/height-0.5)*4);
    else frontColor = mix(cian,blue,(pos/height-0.75)*4);
    
    gl_Position = modelViewProjectionMatrix * vec4(vertex, 1.0);
}
