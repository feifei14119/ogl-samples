///////////////////////////////////////////////////////////////////////////////////////////////////
// OpenGL Image Copyright (c) 2008 - 2011 G-Truc Creation (www.g-truc.net)
///////////////////////////////////////////////////////////////////////////////////////////////////
// Created : 2010-01-09
// Updated : 2010-01-09
// Licence : This source is under MIT License
// File    : gli/core/texture3d.hpp
///////////////////////////////////////////////////////////////////////////////////////////////////

#ifndef GLI_CORE_TEXTURE3D_INCLUDED
#define GLI_CORE_TEXTURE3D_INCLUDED

#include "image.hpp"

namespace gli
{
	//template <template <typename> class mem>
	class texture3D
	{
	public:
		typedef gli::detail::storage::dimensions3_type dimensions_type;
		typedef gli::detail::storage::texcoord3_type texcoord_type;
		typedef gli::detail::storage::size_type size_type;
		typedef gli::format format_type;
		typedef gli::detail::storage::data_type data_type;

	public:
		texture3D();

		explicit texture3D(
			size_type const & Levels,
			format_type const & InternalFormat,
			dimensions_type const & Dimensions);

		/*		template <typename genType>
		explicit texture3D(
			size_type const & Levels,
			format_type const & InternalFormat, 
			dimensions_type const & Dimensions,
			genType const & Texel);
*/
		~texture3D();

		image operator[] (size_type const & Level);
		image const operator[] (size_type const & Level) const;

		bool empty() const;
		format_type format() const;
		dimensions_type dimensions() const;
		size_type levels() const;
		size_type memorySize() const;

	private:
		detail::storage Storage;
	};
}//namespace gli

#include "texture3d.inl"

#endif//GLI_CORE_TEXTURE2D_INCLUDED