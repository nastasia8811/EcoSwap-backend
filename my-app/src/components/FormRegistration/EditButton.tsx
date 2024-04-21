import * as React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';

interface EditButtonProps {
    onClick: () => void;
    dataName: any;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick, dataName }) => {
    return (
        <div data-name={dataName} className="edit-button-wrapper">
            <InputAdornment position="end">
                <IconButton>
                    <EditIcon onClick={() => onClick()} />
                </IconButton>
            </InputAdornment>
        </div>
    )
}
export default EditButton;
