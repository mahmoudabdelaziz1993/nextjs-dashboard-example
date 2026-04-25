import { Scale } from './invoices/scale';

export default function AcmeLogo() {
  return (
   <div className="flex items-center gap-1.5">
      <Scale className='size-10 stroke-2'/>
      <span className="text-3xl font-bold font-serif tracking-tight">Scale</span>
    </div>
  );
}
