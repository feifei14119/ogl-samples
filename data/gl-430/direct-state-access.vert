#version 430 core

#define POSITION	0
#define COLOR		3
#define TEXCOORD	4
#define TRANSFORM0	1

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

layout(binding = TRANSFORM0) uniform transform
{
	mat4 MVP;
} Transform;

layout(location = POSITION) in vec2 Position;
layout(location = TEXCOORD) in vec2 Texcoord;

/*out vert
{
	vec2 Texcoord;
} Vert;*/
out vec2 vTexcoord;

out gl_PerVertex
{
	vec4 gl_Position;
};

void main()
{	
	//Vert.Texcoord = Texcoord;
	vTexcoord = Texcoord;
	gl_Position = Transform.MVP * vec4(Position, 0.0, 1.0);
}
