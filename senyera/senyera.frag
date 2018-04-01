#version 330 core

in vec3 vtexCoord;
out vec4 fragColor;

void main()
{
    int a=9;
    if (mod(floor(mod(vtexCoord.s*a,a)),2) == 0)
    	fragColor = vec4(1,1,0,1);
    else
        fragColor = vec4(1,0,0,1);

}
