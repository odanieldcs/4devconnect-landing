'use client';
import { useEffect } from 'react';

export default function FotosPage() {
	useEffect(() => {
		window.location.href =
			'https://drive.google.com/drive/folders/1bZacSRrC2ujaC-z13vZ30xN3CHPG-1-L?usp=drive_link';
	}, []);

	return null;
}
