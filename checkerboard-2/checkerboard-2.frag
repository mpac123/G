#version 330 core

in vec3 vtexCoord;
out vec4 fragColor;

uniform float n = 8;
void main()
{

    if (mod(floor(vtexCoord.s*n),2) == mod(floor(vtexCoord.t*n),2))
    	fragColor = vec4(0.8,0.8,0.8,1);
    else
        fragColor = vec4(0,0,0,1);

}
