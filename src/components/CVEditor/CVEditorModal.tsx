import { FC } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CVEditor from './CVEditor';
import { CVData } from '../../views/CV/CV';

interface CVEditorModalProps {
  open: boolean;
  onClose: () => void;
  data: CVData;
  onChange: (data: CVData) => void;
}

const CVEditorModal: FC<CVEditorModalProps> = ({ open, onClose, data, onChange }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { height: '90vh' }
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Edit CV
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <CVEditor data={data} onChange={onChange} />
      </DialogContent>
    </Dialog>
  );
};

export default CVEditorModal;