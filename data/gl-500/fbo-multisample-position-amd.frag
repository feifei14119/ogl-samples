#version 420 core

#define POSITION	0
#define COLOR		3
#define TEXCOORD	4
#define FRAG_COLOR	0

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

layout(binding = 0) uniform sampler2DArray Diffuse;

in vec2 vTexcoord;

layout(location = FRAG_COLOR, index = 0) out vec4 Color;

void main()
{
	// TODO: interpolatation param issue hasn't been updated in specification
	Color = texture(Diffuse, vec3(interpolateAtSample(vTexcoord, gl_SampleID), 0.0));
}
