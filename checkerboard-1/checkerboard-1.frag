#version 330 core

in vec3 vtexCoord;
out vec4 fragColor;

void main()
{

    if (mod(floor(vtexCoord.s*8),2) == mod(floor(vtexCoord.t*8),2))
    	fragColor = vec4(0.8,0.8,0.8,1);
    else
        fragColor = vec4(0,0,0,1);

}
