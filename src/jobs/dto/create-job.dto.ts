import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const CreateJobDtoSchema = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string(),
    company: z.string(),
    experience: z.string(),
    doIApplied: z.boolean(),
    JobAdditionalInfo: z.string(),
  })
  .strict();

// class is required for using DTO as a type
export class CreateJobDto extends createZodDto(CreateJobDtoSchema) {
  '';
}

export type Schema = z.infer<typeof CreateJobDtoSchema>;

const testObjec: Schema = {};

console.log(testObjec);
