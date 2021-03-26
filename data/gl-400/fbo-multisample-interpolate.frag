#version 400 core

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

uniform sampler2D Diffuse;

in vec2 vTexcoord;

out vec4 Color;

void main()
{
	// TODO: interpolatation param issue hasn't been updated in specification
	Color = texture(Diffuse, interpolateAtSample(vTexcoord, gl_SampleID));
}
