out vec3 normal;

in vec3 uv_vertexAttrib;
in vec3 uv_normalAttrib;

uniform mat4 uv_modelViewProjectionMatrix;
uniform mat4 uv_scene2ObjectMatrix;

void main(void)
{
	
	mat4 normalMatrix = transpose( uv_scene2ObjectMatrix );
	
	normal = (normalMatrix * vec4(uv_normalAttrib,0.0)).xyz;
	vec4 vertex = uv_modelViewProjectionMatrix* vec4(uv_vertexAttrib ,1.);
	gl_Position = vertex;

}
