#version 400 core

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

uniform sampler2D Diffuse;

/*in block
{
	vec2 Texcoord;
} Vert;*/
in vec2 vTexcoord;

out vec4 Color;

void main()
{
	//Color = texture(Diffuse, interpolateAtSample(Vert.Texcoord, gl_SampleID));
	Color = texture(Diffuse, interpolateAtSample(vTexcoord, gl_SampleID));
}
