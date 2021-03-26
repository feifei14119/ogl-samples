#version 150 core

//#define FUNCTION

precision highp float;
precision highp int;
layout(std140, column_major) uniform;

uniform sampler2D Diffuse;
uniform bool UseGrad;

in vec2 vTexcoord;

out vec4 Color;

#ifndef FUNCTION

void main()
{
	if(UseGrad)
	{
		// TODO: interpolatation param issue hasn't been updated in specification
		vec2 Texcoord00 = interpolateAtOffset(vTexcoord, vec2(-0.5,-0.5));
		vec2 Texcoord10 = interpolateAtOffset(vTexcoord, vec2( 0.5,-0.5));
		vec2 Texcoord11 = interpolateAtOffset(vTexcoord, vec2( 0.5, 0.5));
		vec2 Texcoord01 = interpolateAtOffset(vTexcoord, vec2(-0.5, 0.5));
		Color = textureGrad(Diffuse, vTexcoord, abs(Texcoord10 - Texcoord00), abs(Texcoord01 - Texcoord00));
	}
	else
	{
		//Color = texture(Diffuse, In.Texcoord);
		Color = texture(Diffuse, vTexcoord);
	}
}
/*
void main()
{
	Color = vec4(fwidthFine(interpolateAtCentroid(In.Texcoord)), 0.0, 1.0);
}
*/
#else//FUNCTION

vec4 textureFine(in sampler2D Sampler, in vec2 Texcoord)
{
	vec2 Texcoord00 = interpolateAtOffset(Texcoord, vec2(-0.5,-0.5));
	vec2 Texcoord10 = interpolateAtOffset(Texcoord, vec2( 0.5,-0.5));
	vec2 Texcoord11 = interpolateAtOffset(Texcoord, vec2( 0.5, 0.5));
	vec2 Texcoord01 = interpolateAtOffset(Texcoord, vec2(-0.5, 0.5));
	return textureGrad(Sampler, Texcoord, abs(Texcoord10 - Texcoord00), abs(Texcoord01 - Texcoord00));
}

vec4 textureCoarse(in sampler2D Sampler, in vec2 Texcoord)
{
	return texture(Sampler, Texcoord);
}

void main()
{
	if(UseGrad)
	{
		Color = textureFine(Diffuse, In.Texcoord);
	}
	else
	{
		Color = textureCoarse(Diffuse, In.Texcoord);
	}
}

#endif//FUNCTION
