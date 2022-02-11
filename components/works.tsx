import React, { useRef } from 'react';
import {
	Box,
	Button,
	Heading,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Stack,
	Text,
	useDisclosure,
	Input,
} from '@chakra-ui/react';
import { WorkStore } from 'store/works';

type CreateWorkModalProps = {
	isOpen: boolean;
	onClose: () => void;
};

const CreateWorkModal: React.FC<CreateWorkModalProps> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const { isOpen, onClose } = props;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create new work</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Input ref={inputRef} placeholder='Enter your work name' />
				</ModalBody>

				<ModalFooter>
					<Button
						onClick={() => {
							WorkStore.update((s) => {
								const value = inputRef.current?.value;

								if (value) {
									let data = {
										id: Math.random().toString(),
										title: inputRef.current.value,
										description: '',
										created_at: new Date().toISOString(),
										steps: [],
									};
									s.works.push(data);
									s.active = data;
									onClose();
								}
							});
						}}
						colorScheme={'purple'}
					>
						Create
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

const Works: React.FC = () => {
	const createWorkModal = useDisclosure();
	const { works, active } = WorkStore.useState();
	return (
		<>
			<Heading size='sm' color='gray.500' textTransform={'uppercase'}>
				Your Works
			</Heading>
			<Stack my={4} userSelect='none'>
				{works.length === 0 && <Text>No work.</Text>}
				{works.map((work, idx) => {
					const isActive = active?.id === work.id;
					return (
						<Box key={idx}>
							<Box
								py={2}
								borderLeftWidth='5px'
								borderLeftColor={isActive ? 'purple.400' : 'white'}
								borderRightRadius='lg'
								cursor='pointer'
								_hover={{
									color: 'gray.600',
								}}
								transition='all 0.2s'
								onClick={() => {
									WorkStore.update((s) => {
										s.active = work;
									});
								}}
							>
								<Heading px={4} size='md'>
									{work.title}
								</Heading>
							</Box>
						</Box>
					);
				})}
			</Stack>
			<Button
				mt={6}
				onClick={createWorkModal.onOpen}
				w='full'
				colorScheme={'purple'}
			>
				Create a work
			</Button>
			<CreateWorkModal {...createWorkModal} />
		</>
	);
};

export default Works;
