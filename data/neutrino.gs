layout(triangles) in;
layout(line_strip, max_vertices=3) out;

uniform mat4 uv_modelViewProjectionMatrix;
uniform mat4 uv_modelViewProjectionInverseMatrix;

uniform float eventTime;
uniform float SNRadMax;
uniform float SNTimeMax;

out vec3 texcoord;
out float toDraw;

void main()
{
	//simple explosion
	//float rad = 50.;
	float rad = SNRadMax*(1. - (SNTimeMax - eventTime)/SNTimeMax);
	
	for (int i=0;i<3;i++) {
	
		vec4 vertexPos = uv_modelViewProjectionInverseMatrix*(gl_in[i].gl_Position);
		gl_Position =  uv_modelViewProjectionMatrix *vec4(vertexPos.xyz, 1./rad);
		texcoord = vertexPos.xyz;
		toDraw = i;
		EmitVertex();
		
		gl_Position =  uv_modelViewProjectionMatrix *vec4(vertexPos.xyz, 0.8/rad);
		texcoord = vertexPos.xyz;
		toDraw = i;
		EmitVertex();
	}


	EndPrimitive();

}

