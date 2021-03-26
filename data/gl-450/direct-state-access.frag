#version 450 core

#define FRAG_COLOR	0
#define DIFFUSE		0

layout(binding = DIFFUSE) uniform sampler2D Diffuse;

in vec2 vTexcoord;

layout(location = FRAG_COLOR, index = 0) out vec4 Color;

void main()
{
	// TODO: interpolatation param issue hasn't been updated in specification
	Color = texture(Diffuse, interpolateAtSample(vTexcoord, gl_SampleID));
}
