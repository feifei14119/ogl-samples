#version 420 core

#define POSITION	0
#define COLOR		3

precision highp float;
precision highp int;

uniform mat4 MVP;

layout(location = POSITION) in vec2 Position;
layout(location = COLOR) in vec4 Color;

out gl_PerVertex
{
	vec4 gl_Position;
};

out block
{
	vec4 Color;
} Out;

void main()
{	
	gl_Position = MVP * vec4(Position, float(gl_InstanceID) * 0.25 - 0.5, 1.0);
	Out.Color = Color;
}
