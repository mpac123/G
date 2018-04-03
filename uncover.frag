#version 330 core

in vec4 V;
in vec4 frontColor;
out vec4 fragColor;

uniform float time;

void main()
{
    if (V.x/V.w+1.0>time)
	discard;
    else
    	fragColor = frontColor;
}
