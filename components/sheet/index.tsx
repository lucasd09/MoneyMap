'use client';

import { Root, Trigger, Close, Portal, Overlay, Content, Title, Description } from '@radix-ui/react-dialog';

import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef, type HTMLAttributes, useState } from 'react';
import type { SheetContentProps, SheetContentRef, SheetHeaderProps, SheetProps } from './types';
import { Button } from '../button';
import { sheetVariants } from './consts';
import { Form } from '../form';
import type { FieldValues } from 'react-hook-form';

const SheetOverlay = forwardRef<ElementRef<typeof Overlay>, ComponentPropsWithoutRef<typeof Overlay>>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=open]:animate-in',
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);
SheetOverlay.displayName = Overlay.displayName;

const SheetContent = forwardRef<SheetContentRef, SheetContentProps>(
  ({ side = 'right', className, children, ...props }, ref) => (
    <Portal>
      <SheetOverlay />
      <Content ref={ref} className={cn(sheetVariants({ side }), className)} {...props}>
        {children}
      </Content>
    </Portal>
  ),
);
SheetContent.displayName = Content.displayName;

const SheetHeader = ({ className, children, onClose, ...props }: SheetHeaderProps) => (
  <div className={cn('flex items-center justify-between text-center sm:text-left', className)} {...props}>
    {children}
    <Close
      onClick={onClose}
      className='rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary'
    >
      <X className='h-4 w-4' />
      <span className='sr-only'>Close</span>
    </Close>
  </div>
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = forwardRef<ElementRef<typeof Title>, ComponentPropsWithoutRef<typeof Title>>(
  ({ className, ...props }, ref) => (
    <Title ref={ref} className={cn('font-semibold text-foreground text-lg', className)} {...props} />
  ),
);
SheetTitle.displayName = Title.displayName;

const SheetDescription = forwardRef<ElementRef<typeof Description>, ComponentPropsWithoutRef<typeof Description>>(
  ({ className, ...props }, ref) => (
    <Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
  ),
);
SheetDescription.displayName = Description.displayName;

export const Sheet = <TForm extends FieldValues>(props: SheetProps<TForm>) => {
  const { trigger, title, onClose, onSuccess, children, form } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    onClose?.();
    setIsOpen(false);
  };

  const formHandleSubmit = (data: TForm) => {
    onSuccess?.(data);
  };

  return (
    <Root open={isOpen}>
      <Trigger onClick={() => setIsOpen(true)} asChild={true}>
        {trigger}
      </Trigger>
      <SheetContent className='flex h-screen flex-col'>
        <Form {...form}>
          <form className='flex h-full flex-col justify-between' onSubmit={form.handleSubmit(formHandleSubmit)}>
            <div className=''>
              <SheetHeader onClose={() => setIsOpen(false)}>
                <SheetTitle>{title}</SheetTitle>
              </SheetHeader>
              {children}
            </div>
            <SheetFooter>
              <Close>
                <Button onClick={handleClose} variant={'outline'} type='reset'>
                  Fechar
                </Button>
              </Close>
              {!!onSuccess && (
                <Button type='submit'>
                  Salvar
                </Button>
              )}
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Root>
  );
};