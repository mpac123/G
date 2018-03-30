#version 330 core

in vec3 vert;
in vec3 norml;
out vec4 fragColor;

uniform vec4 lightAmbient;
uniform vec4 lightDiffuse;
uniform vec4 lightSpecular;
uniform vec4 lightPosition;

uniform vec4 matAmbient;
uniform vec4 matDiffuse;
uniform vec4 matSpecular;
uniform float matShininess;

uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;
uniform mat4 viewMatrixInverse;

uniform bool world;

vec4 light(vec3 N, vec3 V, vec3 L){
    N=normalize(N); V=normalize(V); L=normalize(L);
    vec3 R = normalize( 2.0*dot(N,L)*N-L );
    float NdotL = max( 0.0, dot( N,L ) );
    float RdotV = max( 0.0, dot( R,V ) );
    float Idiff = NdotL;
    float Ispec = 0;
    if (NdotL>0) Ispec=pow( RdotV, matShininess );
    return
    matAmbient * lightAmbient +
    matDiffuse * lightDiffuse * Idiff+
    matSpecular * lightSpecular * Ispec;
}

void main() {
    /* eye space */
    vec3 N = normalMatrix * norml;
    vec4 P = modelViewMatrix * vec4(vert,1.0);
    vec3 L = (lightPosition-P).xyz;
    vec3 V = -P.xyz;

    /* world space */
    
    if (world) {
        N=(viewMatrixInverse*vec4(N,0)).xyz;
	    V=(viewMatrixInverse*vec4(V,0)).xyz;
        L=(viewMatrixInverse*vec4(L,0)).xyz;
    }
    fragColor = light(N,V,L);
}
