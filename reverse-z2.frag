#version 330 core

in vec4 frontColor;
in vec4 V;
out vec4 fragColor;

void main()
{
    gl_FragDepth=1-gl_FragCoord.z;
    fragColor = frontColor;
}
