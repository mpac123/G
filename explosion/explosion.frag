#version 330 core

in vec2 vtexCoord;
out vec4 fragColor;

uniform sampler2D explosion;
uniform float time;

float slice = 1.0/30;

void main()
{
    int frame = int(time/slice) % 48;
    int x = frame % 8;
    int y = 5 - int(frame/8);

    vec2 coord = vec2((vtexCoord.s+x)/8.0,(vtexCoord.t+y)/6.0);
    fragColor = texture(explosion,coord);
    fragColor *= fragColor.w;
}
