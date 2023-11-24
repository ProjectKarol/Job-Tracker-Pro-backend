import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const UpdateJobDtoSchema = z
  .object({
    name: z.string().optional(),
    description: z.string().optional(),
    url: z.string().optional(),
    company: z.string().optional(),
    experience: z.string().optional(),
  })
  .strict();

export class UpdateJobDto extends createZodDto(UpdateJobDtoSchema) {
  '';
}
