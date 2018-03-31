#version 330 core

layout (location = 0) in vec3 vertex;
layout (location = 1) in vec3 normal;
layout (location = 2) in vec3 color;
layout (location = 3) in vec2 texCoord;

out vec4 frontColor;

uniform vec2 Min = vec2(-1,-1);
uniform vec2 Max = vec2(1,1);


void main()
{
    vec2 vert = vec2(texCoord.x,texCoord.y);

    vert = (vert+1)/2*(Max-Min)+Min;
    
    frontColor = vec4(color,1.0);
    gl_Position = vec4(vert, 0.0, 1.0);
}
