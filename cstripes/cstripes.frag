#version 330 core

in vec3 vtexCoord;
out vec4 fragColor;

uniform int nstripes = 16;
uniform vec2 origin = vec2(0,0);

void main()
{
    
    if (mod(floor(mod(distance(origin,vtexCoord.xy)*nstripes,nstripes)),2) == 1)
    	fragColor = vec4(1,1,0,1);
    else
        fragColor = vec4(1,0,0,1);

}
