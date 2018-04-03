#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

void main()
{
    vec2 C = vec2(0.5,0.5);
    float d = distance(C,vtexCoord);
    if (d<0.2)
    	fragColor = vec4(1,0,0,1);
    else
        fragColor = vec4(1);
}
