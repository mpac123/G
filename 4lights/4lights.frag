#version 330 core

in vec3 vert;
in vec3 norml;
out vec4 fragColor;

uniform float time;
uniform bool rotate;

uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

vec4 light(vec3 N, vec3 V, vec3 L, vec4 color){
    N=normalize(N); V=normalize(V); L=normalize(L);
    vec3 R = normalize( 2.0*dot(N,L)*N-L );
    float NdotL = max( 0.0, dot( N,L ) );
    float RdotV = max( 0.0, dot( R,V ) );
    float Idiff = NdotL;
    float Ispec = 0;
    if (NdotL>0) Ispec=pow( RdotV, 100 );
    return 0.5 * color * Idiff + Ispec;
}

void main() {

    vec3 N = normalize(normalMatrix * norml);
    vec3 P = (modelViewMatrix * vec4(vert,1.0)).xyz;
    mat3 rotation=mat3(vec3(1,0,0),vec3(0,1,0),vec3(0,0,1));
    if (rotate) {
    	rotation = mat3(vec3(cos(time),sin(time),0),
			vec3(-sin(time),cos(time),0),
			vec3(0,0,1));
    }
    vec3 lightPosition1 = rotation*vec3(0,10,0);
    vec3 lightPosition2 = rotation*vec3(0,-10,0);
    vec3 lightPosition3 = rotation*vec3(10,0,0);
    vec3 lightPosition4 = rotation*vec3(-10,0,0);

    vec3 L1 = normalize(lightPosition1-P).xyz;
    vec3 L2 = normalize(lightPosition2-P).xyz;
    vec3 L3 = normalize(lightPosition3-P).xyz;
    vec3 L4 = normalize(lightPosition4-P).xyz;

    vec3 V = normalize(-P.xyz);
    
    fragColor = light(N,V,L1,vec4(0,1,0,1)) + 
                light(N,V,L2,vec4(1,1,0,1)) + 
                light(N,V,L3,vec4(0,0,1,1)) + 
		light(N,V,L4,vec4(1,0,0,1));
}
