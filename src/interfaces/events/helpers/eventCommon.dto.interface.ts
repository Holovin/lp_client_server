import { EventType } from '../../../enums';

export interface EventCommonDtoInterface {
    type: EventType;
    owner_id: number;
    video_id: number;
    version: number;
}
