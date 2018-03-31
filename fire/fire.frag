#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D sampler0;
uniform sampler2D sampler1;
uniform sampler2D sampler2;
uniform sampler2D sampler3;

uniform float time;
uniform float slice = 0.1;

void main()
{
    int frame = int(time/slice) % 4;
    fragColor = texture(sampler0,vtexCoord);
    if (frame==1) fragColor = texture(sampler1,vtexCoord);
    else if (frame==2) fragColor = texture(sampler2,vtexCoord);
    else if (frame==3) fragColor = texture(sampler3,vtexCoord);

    
    fragColor *= fragColor.w;
}
