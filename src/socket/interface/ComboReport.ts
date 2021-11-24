export interface ComboReport {
  studentName: string;
  studentSex: number;
  idNumber: string;
  studentData: StudentData | null;
  psychicFactor: PsychicFactor | null;
  parentData: ParentData | null;
  parentChildRelation: ParentChildRelation | null;
}
export interface StudentData {
  index: number;
  name: string;
  scoreObjectLength: number;
  studentScoreObject: StudentScoreObject;
  parent1ScoreObject: Parent1ScoreObject;
  parent2ScoreObject: Parent2ScoreObject;
  parentingStyleName1: string;
  parentingStyleDesc1: string;
  parentingStyleList1: ParentingStyleList1Item[];
  parentingStyleName2: string;
  parentingStyleDesc2: string;
  parentingStyleList2: ParentingStyleList2Item[];
}
export interface StudentScoreObject {
  score: number;
  content: string;
  scoreDesc: string;
}
export interface Parent1ScoreObject {
  score: number;
  content: string;
  scoreDesc: string;
}
export interface Parent2ScoreObject {
  score: number;
  content: string;
  scoreDesc: string;
}
export interface ParentingStyleList1Item {
  name: string;
  desc: string;
}
export interface ParentingStyleList2Item {
  name: string;
  desc: string;
}
export interface PsychicFactor {
  index: number;
  name: string;
  gradeBindColor: GradeBindColorItem[];
  factorList: FactorListItem[];
}
export interface GradeBindColorItem {
  grade: number;
  gradeName: string;
  color: string;
}
export interface FactorListItem {
  name: string;
  score: number;
  grade: number;
  gradeDesc: string;
  otherList: OtherListItem[];
}
export interface OtherListItem {
  name: string;
  content: string;
  desc?: string;
}
export interface ParentData {
  index: number;
  name: string;
  parentingStyleName1: string;
  parentingStyleDesc1: string;
  parentingStyleList1?: ParentingStyleList1Item[];
  parentingStyleName2: string;
  parentingStyleDesc2: string;
  parentingStyleList2?: ParentingStyleList2Item[];
  parentingStyleContrastDesc: string;
  otherList: OtherListItem[];
}
export interface ParentChildRelation {
  index: number;
  name: string;
  list: ListItem[];
  desc: string;
}
export interface ListItem {
  score: number;
  name: string;
  content: string;
}
