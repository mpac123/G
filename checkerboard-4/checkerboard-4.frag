#version 330 core

in vec3 vtexCoord;
out vec4 fragColor;

uniform float n = 8;
void main()
{

    if (fract(vtexCoord.s*n)>0.1 && fract(vtexCoord.t*n)>0.1)
    	discard;
    else
        fragColor = vec4(1,0,0,1);

}
