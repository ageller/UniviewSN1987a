uniform float uv_fade;

uniform vec3 neutrinoColor;
uniform float neutrinoAlpha;

in vec3 texcoord;
in vec3 color;
in float toDraw;

out vec4 fragColor;

void main()
{

    fragColor = vec4(neutrinoColor, neutrinoAlpha);
    fragColor.a *= uv_fade;
	if (toDraw > 0){
		fragColor.a = 0.;
	}

}
