import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from 'src/common/constants/_common';

export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
