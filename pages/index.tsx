import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

import Header from 'components/header';
import Works from 'components/works';
import Main from 'components/main';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Work Tracker</title>
			</Head>
			<Header />

			<Box h='100vh' bg='gray.50'>
				<Box p={4}>
					<Heading>Work Tracker</Heading>
					<Text>Simple app to track your works.</Text>
				</Box>

				<Flex py={6} px={4} overflow='hidden'>
					<Box w='80' bg='white' p={4} rounded='lg' shadow={'md'}>
						<Works />
					</Box>
					<Box ml={6} w='full' bg='white' p={4} rounded='lg' shadow={'md'}>
						<Main />
					</Box>
				</Flex>
			</Box>
		</>
	);
};

export default Home;
