#! /usr/bin/env node
/****************************************************************************
 * @Author earthnut
 * @Email earthnut.dev@outlook.com
 * @ProjectName edge-chrome
 * @FileName init.ts
 * @CreateDate  周五  10/11/2024
 * @Description 执行一段写入
 ****************************************************************************/
import { testEnvironment } from './testEnvironment';
import { write } from './write';

/** 根据环境判断写入类型声明文件 */
write(testEnvironment());
