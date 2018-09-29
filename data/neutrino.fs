uniform float uv_fade;

uniform sampler2D cmap;

uniform float neutrinoColorP;
uniform float neutrinoAlpha;

in vec2 texcoord;

out vec4 fragColor;

void main()
{
	vec3 cm = texture(cmap ,vec2(clamp(neutrinoColorP,0.,1),0.5)).rgb;
	fragColor = vec4(cm, neutrinoAlpha);
	float dist = length(texcoord);
	fragColor.a *= dist * uv_fade;


}
