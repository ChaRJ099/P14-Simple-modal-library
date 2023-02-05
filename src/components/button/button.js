import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function SimpleButton({ onClick }) {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={onClick}>Contained</Button>
        </Stack>
    );
}