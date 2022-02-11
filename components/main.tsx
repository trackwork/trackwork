import { Heading } from '@chakra-ui/react';
import React from 'react';
import { WorkStore } from 'store/works';

const Main: React.FC = () => {
	const { active } = WorkStore.useState();

	if (!active) {
		return <Heading size='md'>Choose a work</Heading>;
	}

	return (
		<>
			<Heading>{active.title}</Heading>
		</>
	);
};

export default Main;
