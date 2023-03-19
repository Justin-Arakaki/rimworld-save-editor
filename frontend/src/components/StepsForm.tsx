import { useState, useMemo, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Step from './Step';
import convertFileToDoc from '../utils/converters/convert-file-to-doc';
import modifySave from '../services/modify-save';
import createRWSFile from '../utils/create-rws-file';
export default function StepsForm() {
	const [isLoadingSave, setIsLoadingSave] = useState(false);
	const [isLoadingDefaults, setIsLoadingDefaults] = useState(false);
	const [isLoadingNewSave, setIsLoadingNewSave] = useState(true);
	const [saveFile, setSaveFile] = useState<File | null>(null);
	const [defaultsFile, setDefaultsFile] = useState<File | null>(null);
	const [newSaveDoc, setNewSaveDoc] = useState<XMLDocument | null>(null);
	const [saveDoc, setSaveDoc] = useState<Document | null>(null);
	const [defaultsDoc, setDefaultsDoc] = useState<Document | null>(null);

	async function handleFileDownload() {
		console.log('here');
		if (!saveDoc || !defaultsDoc) return;
		console.log('thru');
		setIsLoadingNewSave(true);
		await modifySave(saveDoc, defaultsDoc);
		await setNewSaveDoc(saveDoc);
		await createRWSFile(saveDoc);
		console.log(newSaveDoc);
		setIsLoadingNewSave(false);
	}

	const step1 = {
		title: 'Step 1: Upload save file',
		description:
			'Typically found in C:\\users\\<username>\\AppData\\LocalLow\\Ludeon Studios\\RimWorld by Ludeon Studios\\Saves folder as .rws file type on Windows',
		buttonText: 'Upload Save File',
		onChange: setSaveFile,
		onLoading: setIsLoadingSave,
		isLoading: isLoadingSave,
	};
	const step2 = {
		title: 'Step 2: Upload defaults file',
		description: 'Create a defaults file and upload. See example here.',
		buttonText: 'Upload Defaults File',
		onChange: setDefaultsFile,
		onLoading: setIsLoadingDefaults,
		isLoading: isLoadingDefaults,
	};
	const step3 = {
		title: 'Step 3: Download file',
		description: 'Place save file in your saves',
		buttonText: 'Download',
		onChange: setNewSaveDoc,
		onLoading: setIsLoadingNewSave,
		isLoading: isLoadingNewSave,
		onClick: handleFileDownload,
	};

	useEffect(() => {
		async function setDoc() {
			if (!saveFile) return;
			setIsLoadingNewSave(true);
			// TODO: react alskdfjlasjdklf
			const doc = await convertFileToDoc(saveFile);
			setSaveDoc(doc);
			console.log('here' + typeof saveDoc);
			if (!doc) {
				console.log('doc is ' + typeof saveDoc);
				return;
			}
			setIsLoadingSave(false);
		}
		setDoc();
	}, [saveFile]);

	useEffect(() => {
		async function setDoc() {
			if (!defaultsFile) return;
			setIsLoadingNewSave(true);
			setDefaultsDoc(await convertFileToDoc(defaultsFile));
			setIsLoadingDefaults(false);
		}
		setDoc();
	}, [defaultsFile]);

	useEffect(() => {
		if (!saveDoc || !defaultsDoc) return;
		setIsLoadingNewSave(false);
	}, [saveDoc, defaultsDoc]);

	return (
		<Stack
			spacing={2}
			sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}
		>
			<Step {...step1} />
			<Step {...step2} />
			<Step {...step3} />
		</Stack>
	);
}
